import {useSelector} from 'react-redux';

const LoadIndicator = () => {
    const loading = useSelector(store => store.loading);

    const showOrHide = loading ? 'loading show' : 'loading';

    return (
        <div className={showOrHide}>
            <span></span>
        </div>
    );
}

export default LoadIndicator;