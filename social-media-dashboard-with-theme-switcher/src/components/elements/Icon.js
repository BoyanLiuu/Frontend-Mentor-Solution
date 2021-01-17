function Icon({ svgName }) {
    const logo = require(`../misc/img/icon-${svgName}.svg`).default;
    return <img alt={`${svgName} logo`} src={logo} />;
}
export default Icon;
