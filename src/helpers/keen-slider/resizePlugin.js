/**
 * This helper prevent incorrect max-width on keen slider element (bug still exist on keen-slider lib)
 * @param {object} slider
 */

const resizePlugin = slider => {
  const observer = new ResizeObserver(() => {
    slider.update();
  });

  slider.on('created', () => {
    observer.observe(slider.container);
  });
  slider.on('destroyed', () => {
    observer.unobserve(slider.container);
  });
};

export default resizePlugin;
