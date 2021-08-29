const { useBabelRc, overrider } = required("customize-cra");
module.exports = overrider(useBabelRc());
