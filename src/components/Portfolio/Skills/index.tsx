import { SKILLS } from '../../../data/skills';
import { Skill as SkillType } from '../../../types/Skill';
import Skill from './Skill';
import styles from './skills.module.css';

const Skills = () => {
	return (
		<section className={styles.skillSection}>
			<ul className={styles.skillsList}>
				{SKILLS.map(({ id, iconName, icon }: SkillType) => (
					<Skill key={id} id={id} icon={icon} iconName={iconName} />
				))}
			</ul>
		</section>
	);
};

export default Skills;
