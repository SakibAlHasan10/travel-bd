
import PropTypes from 'prop-types'
const NavButton = ({children, colorChange}) => {
    return (
        <div>
            <button className="text-lg  w-24  btn-sm  flex items-center gap-3 border-none uppercase">
                {children}
                { colorChange ? 
                <img src="/down-arrow-7425 (1).png"
                  alt="arrow"
                  className=" pr-2 w-8 h-4 pt-1 "
                /> :
                <img src="/down-arrow-7425.png"
                  alt="arrow"
                  className=" pr-2 w-8 h-4 pt-1 "
                />
                }
              </button>
        </div>
    );
};
NavButton.propTypes ={
    children: PropTypes.string,
    colorChange: PropTypes.bool
}
export default NavButton;