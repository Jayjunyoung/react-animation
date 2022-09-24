import styled from "styled-components";
import { motion} from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;


const Box = styled(motion.div)`
    width: 400px;
    height: 400px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    background-color: #00a5ff;
    height: 100px;
    width: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


function App5() {
    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked((prev) => !prev);
    return (
        <Wrapper onClick={toggleClicked}>
        <Box>
        {!clicked ? (//clicked가 false일땐 원형이됌
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
        </Box>
        <Box>
        {clicked ? (//네모일때는 clicked를 true일때 발동
            <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
        </Box>
    </Wrapper>
    )//layoutId: 두개가 같은 컴포넌트라고 알려주는것
}

export default App5;