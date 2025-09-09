import { useTSElements, html, useTSCollection, useTSMetaData } from "@devwareng/vanilla-ts";
function MembershipHero(DOM) {
  const ui = useTSElements(
    DOM,
    html`
        <div class="min-h-screen py-16">
            <h1>index</h1>
        </div>
        `
  );
  return ui;
}
const useMembershipSettings = (DOM) => {
  let IDs;
  ((IDs2) => {
    IDs2["MEMBERHERO"] = "member-hero";
  })(IDs || (IDs = {}));
  const sections = [
    "member-hero"
    /* MEMBERHERO */
  ];
  const components = [MembershipHero];
  return useTSCollection(sections, DOM, components);
};
function Membership(DOM) {
  useTSMetaData({
    name: "Membership Page - Inquiries",
    description: "",
    author: ""
  });
  const ui = useTSElements(
    DOM,
    html`
        <div class="py-8">
            <div class="max-w-screen-2xl mx-auto">
                <div id="member-hero"></div>
            </div>
        </div>
        `
  );
  useMembershipSettings(DOM);
  return ui;
}
export {
  Membership as default
};
