import React  from "react";
import {Header} from "../components/Header";

export const CoursesPage = () => {
    return(
        <>
            <Header/>
            <div className="flex">
                CoursesPage
            </div>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src="../screen_1.jpg" alt=""/>
                                <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>Ребята постепенно осваивают азы робототехники, начиная с изучения механизмов, усложняя модели и программный код, для создания автономных роботов с широким функционалом.
                                Конструирование по собственной задумке, создание проектов в команде и участие в соревнованиях.</p>
                        </div>
                        <div className="card-action">
                            <a href="/">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src="../screen_1.jpg" alt=""/>
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>Кружок электроники - это первоначальная ступень для освоения программирования Arduino. Знакомимся с основами схемотехники, электроники. На занятиях работаем головой и руками: простейшие интересные устройства и роботов, созданных в классе, ребята забирают домой.</p>
                        </div>
                        <div className="card-action">
                            <a href="/">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src="../screen_1.jpg" alt=""/>
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>Изучаем микропроцессор Arduino, принцип работы радиоэлементов, модулей, датчиков и исполнительных устройств, переходя от блочно-визуального программирования на язык C. Ребята учатся паять электро схемы, работают над проектами : колесный соревновательный робот, умный дом, система автополива и другие изобретения.</p>
                        </div>
                        <div className="card-action">
                            <a href="/">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src="../screen_1.jpg" alt=""/>
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>Программирование - это грамотность 21-го века!
                                Хотите, чтобы ваш ребенок превратился из потребителя технологий в их создателя? Тогда курсы по созданию компьютерных игр - это верный путь!
                                В зависимости от возраста и уровня знаний ребята изучают:    Scratch, создают мобильные приложения, Python, Unity, увлекаются созданием сайтов,  изучают C++</p>
                        </div>
                        <div className="card-action">
                            <a href="/">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src="../screen_1.jpg" alt=""/>
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>На данном направлении ребят ждет атмосфера творчества.
                                3D моделирование – это процесс создания трехмерной модели. Основная задача – разработать объемный визуальный образ какого-либо объекта.
                                Преподаватель-практик на данном курсе объяснит ребятам основные понятия и  принципы создания 3D моделей.
                                Создавать различные 3D проекты и, конечно, заберут некоторые свои модели домой, распечатав их на 3D принтере!</p>
                        </div>
                        <div className="card-action">
                            <a href="/">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src="../Unknown.jpg" alt=""/>
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>Занятия составлены на стыке олимпиадной математики и жизни. У детей не возникнет больше вопроса "зачем нужна математика?", ведь либо она нужна в повседневной жизни,
                                либо так красива, что и вопросов не возникает.
                                В Кружке «УМ» мы хотим показать детям  увлекательность математики, научить не бояться задач, рассуждать логически и последовательно.
                                Как результат, повышается успеваемость
                                в школе. В конце года выпускаем "сборник" задач наших математических робокодико</p>
                        </div>
                        <div className="card-action">
                            <a href="/">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}