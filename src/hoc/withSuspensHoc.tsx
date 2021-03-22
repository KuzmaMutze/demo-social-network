import React, {Suspense} from "react";
import Preloader from "../components/common/Preloader/Preloader";


export function withSuspensHoc<WCP>(WrapperdComponent: React.ComponentType<WCP>) {

    return (props: WCP) => {
        return <Suspense fallback={<Preloader/>}>
				<WrapperdComponent {...props}/>
			</Suspense>
    };
}