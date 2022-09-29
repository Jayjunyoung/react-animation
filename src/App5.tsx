import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
    height: 100vh;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const Svg = styled.svg`
    //path는 Svg의 color를씀
    width: 300px;
    height: 300px;
    path {
        stroke: white;//stroke: 선을 의미
        stroke-width: 2;//선의두께
    }
`;

const svg = {
    start: { 
        pathLength: 0, 
        fill: "rgba(255, 255, 255, 0)" ,
    },
    end: {
        fill: "rgba(255, 255, 255, 1)",
        pathLength: 1,//선이 다연결됌
        //여기에 transition을 하면 모든 애니메이션이 5초걸려
    },
};

function App5() {
    return (<Wrapper>
        <Svg
            focusable="false"//airBnb 로고의 path를 의미
            //개발자 도구에서 복붙함
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <motion.path
            variants={svg}
            initial="start"
            animate="end"
            transition={{
                default: { duration: 5 },
                //전체가 되는게 5초가걸려
                fill: { duration: 1, delay: 3 },
                //색을 채우는건 선이그려지고 3초이따 할것
                //trasition을 여기에씀으로써 fill을 따로통제
            }}
            d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
        ></motion.path>
        </Svg>
    </Wrapper>
    )//motion.을통해 애니메이션 주고자하는
    //html태그 적용 가능
}

export default App5;