
const useUniqueId = (() => {
    let id = 0;
    return () => {
        id += 1;
        return { dataId: `unique-id-${id}` };
    }
})();

export { useUniqueId };