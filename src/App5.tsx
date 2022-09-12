import {motion} from "framer-motion";
import styled from "styled-components";
import { useRef } from "react";

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
    //기본적으로 자식들에게 애니메이션을 상속해줌(Circle에도 적용)
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    //ref를 이용해 특정 element에 접근
    return (<Wrapper>
                <BiggerBox ref={biggerBoxRef}>
                <Box
                drag 
                dragSnapToOrigin//드래그를 멈추면 가운데로 돌아감
                dragElastic={0.5} //드래그 한걸 당기는 힘: 1로하면 원이랑 커서랑 끝까지따라감
                dragConstraints={biggerBoxRef}//비거박스에 가장자리까지라고 설정
                variants={boxVariants}
                whileHover="hover"
                whileTap="click"/>
                </BiggerBox>
            </Wrapper>
    )//motion.을통해 애니메이션 주고자하는
    //html태그 적용 가능
}//Board끝에 placrholder함으로써 Board화면 안변하도록 하기

export default App5;