const PlanetItem = (props) => {
    return (
        <div className="planet-block" onClick={props.onClick}>
            { props.planet.name }
        </div>
    );
}

export default PlanetItem;