import City from "../City/City";
import Road from "../Road/Road";
import Thief from "../Thief/Thief";
import Village from "../Village/Village";
import { StructureProps } from "./Strucutre";

const useStructure = (props: StructureProps) => {
    const getStructure = () => {
        switch (props.type) {
        case 'village':
            return <Village {...props} type="village" />;
        case 'city':
            return <City {...props} type="city" />;
        case 'thief':
            return <Thief {...props} type="thief" />;
        case 'road':
            return <Road {...props} type="road" />;
        default:
            throw new Error(`Unknown structure type: ${props.type}`);
        }
    };
    
    return {
        getStructure,
    }
}

export default useStructure;