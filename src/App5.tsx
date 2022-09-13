import styled from "styled-components";
import { useRef } from "react";
import { 
    motion, 
    useMotionValue, 
    useTransform,
    useViewportScroll, 
    } from "framer-motion";


const Wrapper = styled(motion.div)`
    height: 200vh;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`//애니메이션된 스타일컴포넌트적용방법
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App5() {
    const x = useMotionValue(0);//style의 x로연걸
    //첫배열: -800 , 0 , 800의 값을 원함, 두번째: 그에해당하는크기
    //const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
    //motionvalue는 바껴도 재렌더링 되지않는다
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
    const gradient = useTransform(//배경색 건드리는것
        x,
        [-800, 800],
        [
            "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
            "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
        ]
    );
    const { scrollYProgress } = useViewportScroll();
    //0:상단 1:하단
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    return (<Wrapper style={{ background: gradient }}>
                <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
            </Wrapper>
    )//motion.을통해 애니메이션 주고자하는
    //html태그 적용 가능
}

export default App5;