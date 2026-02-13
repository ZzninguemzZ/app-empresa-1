import { use } from 'react';
import Style from './style.module.css';
import Context from '../../Constext';
import ListSimple from '../../UI/ListSimple';


function Header() {

    const {ModulesName, navMap, setnavTop, navTop} = use(Context)

    return (
        <header className={Style.container}>
        <ListSimple
            list={navMap[`nav${ModulesName}`] ?? []}
            classNameLi=''
            classNameLi2={(id) => classNameLi2(id, navTop)}
            classNameP=''
            classNameUl=''
            printIcon={true}
            printText={true}
            onClickLi={(id) => {setnavTop(id), console.log(id)}}
            >
            </ListSimple>
        </header>
    )
};

function classNameLi2(id: string, navTop: string) {
    if (id === navTop) {
        return Style.li2
    } else {
        return ''
    }
}


export default Header;