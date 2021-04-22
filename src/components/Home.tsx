import ExperiencesList from './ExperiencesList';
import AboutMe from './AboutMe';
import Profile from './Profile';
import Portfolio from './Portfolio';
import SkillsList from './SkillsList';

function Home() {
    return (
        <div>
            <Profile />
            <AboutMe />
            <SkillsList />
            <Portfolio />
            <ExperiencesList />
        </div>
    );
}
export default Home;