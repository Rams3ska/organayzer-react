import React, { useEffect, useState } from 'react';

import { ButtonMenu } from './components';
import { SettingsPage, TaskCreatePage, TaskPage, WeatherPage, InfoPage } from './pages';
import { gearIcon, exitIcon, cloudIcon, infoIcon, todoIcon } from './assets/icons';
import { Route, Link } from 'react-router-dom';

function App() {
	const [tasks, setTasks] = useState([]);
	const [isLoaded, setLoad] = useState(false);

	useEffect(() => {
		setLoad(false);
		fetch('taskDb.json')
			.then((resp) => resp.json())
			.then((data) => {
				setTasks(data);
				!isLoaded && setLoad(true);
			});
	}, []);

	return (
		<div className="container">
			<div className="content-box">
				<Route path={['/tasks', '/']} render={() => <TaskPage tasks={tasks} isLoaded={isLoaded} />} exact />
				<Route path="/settings" component={SettingsPage} exact />
				<Route path="/taskcreate" component={TaskCreatePage} exact />
				<Route path="/info" component={InfoPage} exact />
				<Route path="/weather" component={WeatherPage} exact />
			</div>
			<div className="blue-line" />
			<div className="bottom-menu">
				<Link to="/tasks">
					<ButtonMenu icon={todoIcon} maClass="button-task" action={() => {}} />
				</Link>
				<Link to="/weather">
					<ButtonMenu icon={cloudIcon} maClass="button-weather" action={() => {}} />
				</Link>
				<Link to="/info">
					<ButtonMenu icon={infoIcon} maClass="button-info" action={() => {}} />
				</Link>
				<Link to="settings">
					<ButtonMenu icon={gearIcon} maClass="button-settings" action={() => {}} />
				</Link>
				<ButtonMenu icon={exitIcon} style={{ filter: 'contrast(0.5)', transform: 'rotate(45deg)' }} maClass="button-exit" action={() => {}} />
			</div>
		</div>
	);
}

export default App;
