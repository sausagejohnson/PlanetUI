const PlanetItem = (props) => {

    const classes = 'planet-item ' + (props.active ? 'active' : '');

    return (
        <div className={classes} onClick={props.onClick}>
            { props.planet.name }
        </div>
    );
}

export default PlanetItem;