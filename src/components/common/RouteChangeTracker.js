import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const RouteChangeTracker = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);




    const test = (path) => {
        console.log(path);

        if(path === "/"){
            return "홈";
        } else if(path === "/contact/member"){
            return "구성원 소개";
        }
        return "홈"; 


    }

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            // 환경 변수 사용
            ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            const nowPath = location.pathname;
           
            // ReactGA.pageview(location.pathname + location.search);
            console.log(nowPath)
            ReactGA.pageview(nowPath);
            ReactGA.event({
                category: nowPath,
                action: nowPath,
                label:  test(nowPath),
                nonInteraction : true
            })
        }
    }, [initialized, location]);
}

export default RouteChangeTracker;