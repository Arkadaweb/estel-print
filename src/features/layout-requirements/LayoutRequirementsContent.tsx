import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";

const LayoutRequirementsContent: FC<PropsWithChildren<any>> = ({
                                       mainData
                                   }) => {


    const breadCrumbs = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: '',
            title: 'Требования к макетам'
        }
    ]

    return (
        <MaxWithLayout>
            <div className="layout-requirements-content">
                <BreadCrumbs elements={breadCrumbs}/>

                <h1>
                    Требования к макетам
                </h1>
                <p dangerouslySetInnerHTML={{__html: mainData?.content?.rendered || ''}}/>

                {/*<p>*/}
                {/*    Файл верстки на выставочный стенд должен точно соответстсвовать линейным размерам будущего плаката.*/}
                {/*    Все значащие элементы изображения (логотипы, названия, адреса, телефоны и пр.) должны отступать не*/}
                {/*    менее чем на 30 мм от края стенда. Все важные цвета (фирменные цвета, логотипы) должны быть указаны*/}
                {/*    по номерам шкалы Pantone Process Color.*/}
                {/*</p>*/}

                {/*<h5>*/}
                {/*    Форматы файлов:*/}
                {/*</h5>*/}
                {/*<p>*/}
                {/*    *.tif — TIFF, растровый файл, без внедренного цветового профиля и альфа-каналов. Все слои должны*/}
                {/*    быть слиты в единый слой (операция Flatten Image).*.eps (CS 4) — шрифты в кривых, эффекты переведены*/}
                {/*    в растр.*.pdf — Adobe Acrobat Reader.*/}
                {/*</p>*/}
                {/*<p>*/}
                {/*    Файлы созданные в CorelDRAW в работу не принимаются. Они должны быть конвертированы в *.ai *.eps или*/}
                {/*    *.pdfШрифты должны быть переведены в кривые, эффекты переведены в растр.Без вылетов, припусков и*/}
                {/*    кроп-марок.Минимальная толщина линий должна быть 0,2 ммДля импортированных в верстку изображений*/}
                {/*    должны быть предоставлены оригинальные растровые файлы.*/}
                {/*</p>*/}
                {/*<p>*/}
                {/*    Цветовое пространство – CMYK.Черный цвет должен состоять из четырех красок (C-50%, M-50%, Y-50%,*/}
                {/*    K-100%).Разрешение файла 100-120 dpi, но не более 150 dpi.Суммарная величина заливок не должна*/}
                {/*    превышать 270%.*/}
                {/*</p>*/}

                {/*<h5>*/}
                {/*    Форматы файлов: <span>+7 (969) 967-98-52</span>*/}
                {/*</h5>*/}
                {/*<p>*/}
                {/*    При необходимости точного совпадения по цвету файлов желательно заказывать цветопробу.Материалы,*/}
                {/*    сделанные в программах Microsoft Office, макетами не являются.Печать материалов из приложений MO,*/}
                {/*    возможна в индивидуальном порядке, при согласовании возможности с дизайнером за предварительно*/}
                {/*    оговоренную сумму, без гарантии качества вложенных растровых графических изображений (картинок).*/}
                {/*</p>*/}

                {/*<h5>*/}
                {/*    Форматы носителей: <span>диски CD-R, CD-RW, DVD-R, Flash USB drive</span>*/}
                {/*</h5>*/}
                {/*<p>*/}
                {/*    Файлы, не соответствующие перечисленным требованиям, не являются файлами, готовыми для печати, они*/}
                {/*    будут возвращены заказчику или исправляются за предварительно оговоренную сумму.*/}
                {/*</p>*/}

            </div>
        </MaxWithLayout>
    );
};

export default LayoutRequirementsContent;
