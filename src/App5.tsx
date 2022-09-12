import {motion} from "framer-motion";
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Box = styled(motion.div)`//애니메이션된 스타일컴포넌트적용방법
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    start:{
        opacity:0,
        scale: 0.5,
    },
    end:{
        opacity:1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5,//0.5초가걸림 박스애니메이션 마치는데
            bounce: 0.5,
            delayChildren: 0.5,//자식 variant에게 delay준다
            staggerChildren: 0.2,//원 1개당 0.2초 후에 하나씪나옴
        },
    },
}

const Circle = styled(motion.div)`
    place-self: center;//justify랑 align 둘다 가운데로하게하는것
    background-color: white;
    height:70px;
    width: 70px;
    border-radius: 35px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const circleVariants = {
    start: {
        opacity: 0,//투명
        y: 10,//motion에서만 사용: y좌표를 의미한다
    },
    end: {
        opacity: 1,//다나옴
        y: 0,
    },
};


function App5() {
    //기본적으로 자식들에게 애니메이션을 상속해줌(Circle에도 적용)
    return (<Wrapper>
                <Box variants={boxVariants} initial="start" animate="end">
                    <Circle variants={circleVariants} />
                    <Circle variants={circleVariants} />
                    <Circle variants={circleVariants} />
                    <Circle variants={circleVariants} />
                </Box>
            </Wrapper>
    )//motion.을통해 애니메이션 주고자하는
    //html태그 적용 가능
}//Board끝에 placrholder함으로써 Board화면 안변하도록 하기

export default App5;