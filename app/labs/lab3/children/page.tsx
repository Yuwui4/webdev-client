import BoxDemo from "./BoxDemo";
import BoxModelDemo from "./BoxModelDemo";
import NestingOrderDemo from "./NestingOrderDemo";
import CardDemo from "./CardDemo";

export default function Children() {
    return (
        <div>
            <BoxDemo />
            <BoxModelDemo />
            <NestingOrderDemo />
            <CardDemo />
        </div>
    );
}