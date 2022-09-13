import styled from "styled-components";
import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Box = styled(motion.div)`//애니메이션된 스타일컴포넌트적용방법
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
    overflow: hidden;
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const boxVariants = {
    hover: {scale:1.5, rotateZ:90},
    click:  {scale:1 , borderRadius: "100px"},
};



function App5() {
    const x = useMotionValue(0);
    return (<Wrapper>
                <Box style={{ x }} drag="x" dragSnapToOrigin />
            </Wrapper>
    )//motion.을통해 애니메이션 주고자하는
    //html태그 적용 가능
}

export default App5;