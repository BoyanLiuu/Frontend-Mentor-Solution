import SubCard from './SubCard';
import { StyledBottomSection } from '../styles/StyledBottomSection';
function BottomSection() {
    const cardAry = [
        {
            title: 'Page Views',
            number: '87',
            difference: 3,
            flag: true,
            svgName: 'facebook',
        },
        {
            title: 'Likes',
            number: '57',
            difference: 2,
            flag: false,
            svgName: 'facebook',
        },
        {
            title: 'Like',
            number: '5462',
            difference: 2257,
            flag: true,
            svgName: 'instagram',
        },
        {
            title: 'Profile Views',
            number: '52k',
            difference: 1375,
            flag: true,
            svgName: 'instagram',
        },
        {
            title: 'Retweets',
            number: '117',
            difference: 303,
            flag: true,
            svgName: 'twitter',
        },
        {
            title: 'Likes',
            number: '507',
            difference: 553,
            flag: true,
            svgName: 'twitter',
        },
        {
            title: 'Likes',
            number: '107',
            difference: 19,
            flag: false,
            svgName: 'youtube',
        },
        {
            title: 'Total Views',
            number: '1407',
            difference: 12,
            flag: false,
            svgName: 'youtube',
        },
    ];
    const cardSection = [];
    for (let i = 0; i < cardAry.length; i++) {
        cardSection.push(
            <SubCard
                key={i}
                title={cardAry[i].title}
                number={cardAry[i].number}
                difference={cardAry[i].difference}
                flag={cardAry[i].flag}
                svgName={cardAry[i].svgName}
            />
        );
    }
    return (
        <StyledBottomSection>
            <p className="bottom-title"> Overview - Today</p>
            {cardSection}
        </StyledBottomSection>
    );
}

export default BottomSection;
