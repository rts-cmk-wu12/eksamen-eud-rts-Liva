import { BarLoader } from "react-spinners";

const override = {
    marginInline: 'auto'
};

// Følgende kode er udtaget fra et af mine tidligere projekter
function Loader({ styling = null }) {
    return (
        <BarLoader
            color="#E3E3E3"
            loading={true}
            cssOverride={override}
            size={55}
            className={styling}
        />
    );
}

export default Loader;