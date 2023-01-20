/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

module.exports = nextConfig

const plugins = [withTM];

module.exports = (_phase, { defaultConfig }) => {
  return plugins.reduce(
    (acc, plugin) => {
      if (Array.isArray(plugin)) {
        return plugin[0](acc, plugin[1]);
      }
      return plugin(acc);
    },
    { ...nextConfig }
  );
};