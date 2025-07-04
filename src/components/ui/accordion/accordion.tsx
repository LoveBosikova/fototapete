import style from './accordion.module.scss';
import AccordionItem from './accordionItem';

type IQuestion = {
    question: string;
    answer: string;
}

type IAccordionProps = {
    questions: IQuestion[],
    isHandleAnswers?: boolean, // Педелаем ответ одной строкой - false, если передаем ответ как кастомный элемент, то true
};

function Accordion (props: IAccordionProps) {
const { questions, isHandleAnswers = false } = props;

    return (
        <ul className={style.accordion}>
            {questions.map((question: IQuestion) => <AccordionItem isHandleAnswers={isHandleAnswers} key={question.question} question={question}></AccordionItem>)}
        </ul>
    )
}

export default Accordion