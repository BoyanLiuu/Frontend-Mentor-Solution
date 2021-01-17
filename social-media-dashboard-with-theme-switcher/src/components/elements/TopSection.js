import MainCard from './MainCard';
import { StyledTopSectionContainer } from '../styles/StyledTopSection';
function TopSection() {
    const cardAry = [
        {
            name: '@nathanf',
            followers: '1987',
            difference: 12,
            flag: true,
            svgName: 'facebook',
        },
        {
            name: '@nathanf',
            followers: '1044',
            difference: 99,
            flag: true,
            svgName: 'twitter',
        },
        {
            name: '@realnathanf',
            followers: '11K',
            difference: 1099,
            flag: true,
            svgName: 'instagram',
        },
        {
            name: 'Nathan F.',
            followers: '8239',
            difference: 144,
            flag: false,
            svgName: 'youtube',
        },
    ];
    const cardSection = [];
    for (let i = 0; i < cardAry.length; i++) {
        cardSection.push(
            <MainCard
                key={i}
                name={cardAry[i].name}
                followers={cardAry[i].followers}
                difference={cardAry[i].difference}
                flag={cardAry[i].flag}
                svgName={cardAry[i].svgName}
            />
        );
    }
    return <StyledTopSectionContainer>{cardSection}</StyledTopSectionContainer>;
}

export default TopSection;
