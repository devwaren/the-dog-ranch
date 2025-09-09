const useUniqueId = /* @__PURE__ */ (() => {
  let id = 0;
  return () => {
    id += 1;
    return { dataId: `unique-id-${id}` };
  };
})();
export {
  useUniqueId as u
};
