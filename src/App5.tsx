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

const box = {//custom은 함수를 이용해 객체반환
    entry: (back:boolean) => {
        return {//true일땐 오른쪽에서 왼쪽으로
            x: back? -500 : 500,//안보일땐 x:500인 방향에있음
            opacity: 0,
            scale: 0,
        }
    },
    center: {
        x: 0,//보일땐 가운데에 있을것
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: (back:boolean) => { 
        return {
            x: back? 500 : -500, //true일때 500으로 날라감
            opacity: 0, 
            scale: 0, 
            transition: { duration: 0.3 }
        }
    },
};


function App5() {
    const [visible, setVisible] = useState(1);
    const [back,setBack] = useState(false);
    const nextPlease = () => {
        setVisible((prev) => (prev === 10 ? 10 : prev + 1));
        setBack(false);
    }
    const prevPlease = () => {
        setVisible((prev) => (prev === 1 ? 1 : prev - 1));
        setBack(true)
    }//exitBeforeEnter - 노트에 적어놈
    return (<Wrapper>
        <AnimatePresence custom={back}>
            <Box
                custom={back}
                variants={box}
                initial="entry"
                animate="center"
                exit="exit"
                key={visible}//이거에따라 렌더링이됌
            >
                {visible}
            </Box>
        </AnimatePresence>
        <button onClick={nextPlease}>next</button>
        <button onClick={prevPlease}>prev</button>
    </Wrapper>
    )//motion.을통해 애니메이션 주고자하는
    //html태그 적용 가능
}

export default App5;