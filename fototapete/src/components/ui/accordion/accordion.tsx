import style from './accordion.module.scss';
import AccordionItem from './accordionItem';

type IQuestion = {
    question: string;
    answer: string;
}

type IAccordionProps = {
    questions: IQuestion[]
};

function Accordion (props: IAccordionProps) {
const { questions } = props;

    return (
        <ul className={style.accordion}>
            {questions.map((question: IQuestion) => <AccordionItem question={question}></AccordionItem>)}
        </ul>
    )
}

export default Accordion