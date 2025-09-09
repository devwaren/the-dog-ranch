import { html, mapper, useTSSelect, useTSElements, useTSCollection, useTSEvent } from "@devwareng/vanilla-ts";
import { m as messageSchema, c as chatStoreMsg, i as inputSchema, v as vectors, b as chatStore } from "../entry-server.js";
import { P as Paws } from "./Paws-ChjZ0tVY.js";
import "zod";
import "zustand/vanilla";
import "./useUniqueId-NEFOmYFG.js";
const useChatMessages = (messages, isTyping, errorMsg, options = {}) => {
  const typingBubble = html`
        <div class="flex">
            <div class="bg-gray-100 px-3 py-2 rounded-2xl animate-pulse text-sm">typing...</div>
        </div>
    `;
  const errorBubble = (msg) => html`
        <div class="text-xs text-red-600 mt-1" role="alert">${msg}</div>
    `;
  const dateFormat = (m) => new Date(m.ts).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  const shouldShowApplyButton = (text) => {
    const lower = text.toLowerCase();
    return ["apply", "book", "membership"].some((k) => lower.includes(k));
  };
  const messageMapper = mapper(
    messages.map((m) => {
      const isUser = m.role === "user";
      const wrapperClass = isUser ? "justify-end" : "justify-start";
      const bubbleClass = isUser ? "bg-orange-600 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none";
      let content;
      if (options.asHTML && !isUser) {
        const div = document.createElement("div");
        div.className = "text-sm";
        div.innerHTML = m.text;
        content = div;
      } else {
        content = html`<div class="text-sm">${m.text}</div>`;
      }
      return html`
                <div class="flex ${wrapperClass}">
                    <div class="max-w-[80%] break-words px-4 py-2 rounded-2xl shadow-sm ${bubbleClass}">
                        ${content}
                        ${!isUser && shouldShowApplyButton(m.text) ? html`<a href="/membership" class="mt-2 px-3 py-1 rounded bg-orange-600 text-white text-xs hover:bg-orange-700">
                                Apply Membership
                        </a>` : ""}
                        <div class="text-xs opacity-60 mt-1 text-right"> ${dateFormat(m)} </div>
                    </div>
                </div>
            `;
    })
  );
  return {
    typingBubble,
    errorBubble,
    messageMapper,
    isTyping,
    errorMsg
  };
};
const uid = (n = 6) => Math.random().toString(36).slice(2, 2 + n);
function useLLMsVector(getMessages, setMessages, setError, render, setTyping, vectors2) {
  function pushMessage(role, text) {
    const candidate = {
      id: uid(),
      role,
      text,
      ts: Date.now()
    };
    const safe = messageSchema.safeParse(candidate);
    if (!safe.success) {
      setError("Message failed validation.");
      render();
      return;
    }
    setMessages([...getMessages(), safe.data]);
    setError(null);
    render();
  }
  function simulateBotReply(input) {
    setTyping(true);
    render();
    setTimeout(() => {
      const lower = input.toLowerCase().trim();
      const words = lower.replace(/[?.!,]/g, "").split(/\s+/);
      if ((words[0] === "hi" || words[0] === "hello") && words[1] && /^(wh|how)/.test(words[1])) {
        const reply2 = "Thank you! It seems you’re trying to ask a question, let me know more.";
        pushMessage("bot", reply2);
        setTyping(false);
        render();
        return;
      }
      const priority = [
        "hello",
        "hi",
        "register",
        "book",
        "membership",
        "appointment",
        "price",
        "address",
        "contact",
        "apply",
        "program",
        "schedule",
        "time"
      ];
      const matches = priority.filter((key) => lower.includes(key));
      let reply;
      if (matches.length > 0) {
        reply = matches.map((m) => vectors2[m]).join("\n\n");
      } else {
        reply = "Sorry, I didn't understand that. Could you re-type your question?";
      }
      pushMessage("bot", reply);
      setTyping(false);
      render();
    }, 800 + Math.random() * 400);
  }
  return { pushMessage, simulateBotReply };
}
function ChatContainer(DOM) {
  const { getState, setState, subscribe } = chatStoreMsg;
  const { pushMessage, simulateBotReply } = useLLMsVector(
    () => getState().messages,
    (m) => setState({ messages: m }),
    (msg) => setState({ errorMsg: msg }),
    render,
    (v) => setState({ isTyping: v }),
    vectors
  );
  function handleSend(input) {
    const raw = input.value;
    const parsed = inputSchema.safeParse(raw);
    if (!parsed.success) {
      setState({ errorMsg: parsed.error.issues[0].message });
      return;
    }
    setState({ errorMsg: null });
    pushMessage("user", parsed.data);
    input.value = "";
    simulateBotReply(parsed.data);
  }
  function render() {
    const { messages, isTyping, errorMsg } = getState();
    const { typingBubble, errorBubble, messageMapper } = useChatMessages(
      messages,
      isTyping,
      errorMsg
    );
    const ui = useTSElements(
      DOM,
      html`
            <div class="max-w-[360px] w-full bg-white p-3 rounded-md shadow-2xl max-h-[560px] flex flex-col">
                <!-- header -->
                <div class="flex items-center gap-3 border-b pb-3 mb-2">
                    <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                        <p>DR</p>
                    </div>
                    <div>
                        <div class="font-semibold">Dog Ranch Assistant</div>
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
            
                <!-- messages container -->
                <div data-id="chat-scroll" class="flex-1 overflow-y-auto space-y-3 p-3 scroll-smooth hidescroll">
                    ${messageMapper}
                    ${isTyping ? typingBubble : ""}
                </div>
            
                <!-- input area -->
                <div class="mt-3 pt-2 border-t">
                    <form data-id="chat-form" class="flex flex-col gap-2">
                        <div class="flex gap-2 items-center">
                            <input id="data-input" data-id="chat-input" type="text" placeholder="Type a message..."
                                class="flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-200" />
                            <button data-id="send-btn" type="submit" class="px-4 py-2 rounded-lg bg-orange-600 text-white">
                                Send
                            </button>
                        </div>
                        ${errorMsg ? errorBubble(errorMsg) : ""}
                    </form>
                </div>
            </div>
          `
    );
    const form = useTSSelect("[data-id='chat-form']", DOM);
    const inputEl = useTSSelect("#data-input", DOM);
    if (form && inputEl) {
      form.onsubmit = (e) => {
        e.preventDefault();
        handleSend(inputEl);
      };
      inputEl.onkeydown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend(inputEl);
        }
      };
    }
    return ui;
  }
  subscribe(() => {
    render();
    requestAnimationFrame(() => {
      const sc = useTSSelect("[data-id='chat-scroll']", DOM);
      if (sc) sc.scrollTop = sc.scrollHeight;
    });
  });
  return render();
}
const useChatSettings = (DOM) => {
  let IDs;
  ((IDs2) => {
    IDs2["CHATBOT"] = "chat-bot";
  })(IDs || (IDs = {}));
  const sections = [
    "chat-bot"
    /* CHATBOT */
  ];
  const components = [Paws];
  useTSCollection(sections, DOM, components);
  const container = useTSSelect("#chat-container", DOM);
  useTSEvent("chat-bot", "click", (e) => {
    e.preventDefault();
    chatStore.getState().toggleChat();
  });
  chatStore.subscribe((state) => {
    container.textContent = "";
    if (state.isOpen) {
      const wrapper = document.createElement("div");
      wrapper.className = "animate__animated animate__fadeInRight";
      ChatContainer(wrapper);
      container.appendChild(wrapper);
    } else {
      const wrapper = document.createElement("div");
      wrapper.className = "animate__animated animate__fadeOutRight";
      ChatContainer(wrapper);
      container.appendChild(wrapper);
    }
  });
};
function ChatBot(DOM) {
  const ui = useTSElements(
    DOM,
    html`
        <div class="fixed right-[2%] bottom-10 z-[99]">
            <div class="relative">
                <div id="chat-container" class="animate__animated animate__fadeInUp delay-75 absolute bottom-12 right-5"></div>
                <button id="chat-bot"
                    class="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-950 grid place-items-center shadow-2xl cursor-pointer">
                    <p class="sr-only">chat-bot</p>
                </button>
            </div>
        </div>
    `
  );
  useChatSettings(DOM);
  return ui;
}
export {
  ChatBot as default
};
