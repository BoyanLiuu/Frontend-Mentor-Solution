/* eslint-disable jsx-a11y/anchor-is-valid */


import { useEffect } from 'react';
import {projectDesc as data,getCorrectObj} from '../assets/data/data';
import { Link,useParams } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '../assets/images/icons/arrow-left.svg';
import { ReactComponent as RightIcon } from '../assets/images/icons/arrow-right.svg';

function PortfolioDetail({ viewport }) {
    let { work } =useParams();
  
    let curIdx = getCorrectObj[work];

    const {
        projectName,
        projectBg,
        projectSummary,
        projectSkills,
        projectType,
        imgName,
    } = data[curIdx];

    // find next/ prev index
    let nextIdx = 0;
    let prevIdx = 0;
    if (curIdx === 0) {
        nextIdx = 1;
        prevIdx = 3;
    } else if (curIdx === 3) {
        nextIdx = 0;
        prevIdx = 2;
    } else {
        nextIdx = curIdx + 1;
        prevIdx = curIdx - 1;
    }

    const nextName =data[nextIdx].projectName;
    const prevName =data[prevIdx].projectName;
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const postfix = viewport === 'desktop' ? `@2x` : '';

    const staticImg1 = require(`../assets/images/detail/${viewport}/image-${imgName}-preview-1${postfix}.jpg`)
        .default;

    const staticImg2 = require(`../assets/images/detail/${viewport}/image-${imgName}-preview-2${postfix}.jpg`)
        .default;
    const heroImg = require(`../assets/images/detail/${viewport}/image-${imgName}-hero${postfix}.jpg`)
        .default;
    return (
        <>
            <div className="project-main-container">
                <img
                    src={heroImg}
                    alt="hero"
                    className="project-main-container__img"
                />
                <div className="project-detail">
                    <h1 className="project-detail__name">{projectName}</h1>
                    <p className="project-detail__summary">{projectSummary}</p>
                    <p className="project-detail__type">{projectType}</p>
                    <p className="project-detail__skills">{projectSkills}</p>

                    <a href="#" className="project-detail__link-btn">
                        View Website
                    </a>
                </div>

                <div className="project-main-container__background">
                    <h1>Project Background</h1>
                    <p>{projectBg}</p>
                </div>
                <div className="project-main-container__static-preview">
                    <h1>Static Previews</h1>
                    <img src={staticImg1} alt="preview 1" />
                    <img src={staticImg2} alt="preview 2" />
                </div>
            </div>

            <div className="slider-container">
                <Link to={`/portfolio/${prevName.toLowerCase()}`} className="slider-container__btn">
                    <div className="slider-container__info">
                        <LeftIcon className="slider-container__icon" />
                        <p>{prevName}</p>
                        <p>Previous Project</p>
                    </div>
                </Link>
                <Link to={`/portfolio/${nextName.toLowerCase()}`} className="slider-container__btn">
                    <div className="slider-container__info">
                        <RightIcon className="slider-container__icon" />
                        <p>{nextName}</p>
                        <p>Next Project</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default PortfolioDetail;
