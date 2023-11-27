import { ref, onUnmounted } from "vue";

export function useDefer(maxCount: number = 100) {
  const frame = ref(0);
  let flag: number;
  function updateFrameCount() {
    flag = requestAnimationFrame(() => {
      frame.value++;
      if (frame.value >= maxCount) {
        return;
      }

      updateFrameCount();
    });
  }
  updateFrameCount();

  onUnmounted(() => {
    cancelAnimationFrame(flag);
  });

  return function defer(n: number) {
    return frame.value >= n;
  };
}
