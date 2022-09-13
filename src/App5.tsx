import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


const Box = styled(motion.div)`
    width: 400px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    position: absolute;//슬라이더가 안튕기로도록한것
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
    invisible: {
        x: 500,//안보일땐 x:500인 방향에있음
        opacity: 0,
        scale: 0,
    },
    visible: {
        x: 0,//보일땐 가운데에 있을것
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
    exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 1 } },
};


function App5() {
    const [visible, setVisible] = useState(1);
    const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    const prevPlease = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    return (<Wrapper>
        <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
            i === visible ? (//Box 컴포넌트로 랜더링
            <Box
                variants={box}
                initial="invisible"
                animate="visible"
                exit="exit"
                key={i}
            >
                {i}
            </Box>
        ) : null
        )}
        </AnimatePresence>
        <button onClick={nextPlease}>next</button>
        <button onClick={prevPlease}>prev</button>
    </Wrapper>
    )//motion.을통해 애니메이션 주고자하는
    //html태그 적용 가능
}

export default App5;