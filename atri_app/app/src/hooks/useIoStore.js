import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "service": {},
  "projects": {},
  "blogs": {},
  "product designer": {},
  "education": {},
  "gk": {},
  "faq": {},
  "last": {}
}});

export default useIoStore;
