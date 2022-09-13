import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;


const Box = styled(motion.div)`
    width: 400px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    position: absolute;
    top: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const boxVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateZ: 360,
    },
    leaving: {
        opacity: 0,
        scale: 0,
        y: 50, //y축 방향으로 움직임
    },
};


function App5() {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);
    return (<Wrapper>
        <button onClick={toggleShowing}>Click</button>
        <AnimatePresence>
            {showing ? (
            <Box
                variants={boxVariants}
                initial="initial"
                animate="visible"
                exit="leaving"//사라질때의 animation
            />
        ) : null}
        </AnimatePresence>
    </Wrapper>
    )//motion.을통해 애니메이션 주고자하는
    //html태그 적용 가능
}

export default App5;