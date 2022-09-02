import { useContext } from "react";
import { CalcContext } from "./context/CalcContext";

const getStyleName = (btn) => {
    const className = {
        'clear': 'clear',
        '÷': 'opt',
        '+': 'opt',
        '-': 'opt',
        '=': 'opt',
    }

    return className[btn];
}

const Button = ({value}) => {
    const {calc, setCalc} = useContext(CalcContext);

    //User clicks clear
    const resetClick = () => {
        setCalc({num:0, res:0})
    }

    //User clicks number
    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        numberValue = Number(calc.num + numberString)

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    //User clicks operation
    const signClick = () => {
        setCalc({
            sign:value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num:0
        })
    }

    //User clicks equals
    const equalsClick = () => {
        if(calc.res && calc.num) {
            const math = (a, b, sign) => {
            const results = {
                '+': (a,b) => a + b,
                '÷': (a,b) => a / b,
                '-': (a,b) => a - b
            }

            return results[sign](a,b);
        }
        
        setCalc({
            res: math(calc.res, calc.num, calc.sign),
            num: 0
            })
        }
    }


    const handleBtnClick = () => {
        const results = {
            'clear':resetClick,
            '÷': signClick,
            '+': signClick,
            '-': signClick,
            '=': equalsClick
        }
        if(results[value]){
            return results[value]()
        } else {
            return handleClickButton()
        }
    }

    return (
    <button onClick={handleBtnClick} className={ `${getStyleName(value)} button` }>
    {value}
    </button>
    );
}

export default Button;