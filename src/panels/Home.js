import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import { Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';




const Home = ({ id, go, fetchedUser }) => {

	let level = "100" ;
	let phis_def = 0 ;
	let mage_def = 0 ;
	let critical = 0 ;
	let dodge = 0 ;

	return (
		<Fragment>


		<Panel id={id}>
			<PanelHeader>Калькулятор характеристик</PanelHeader>
			<FormLayout>
				<Select id="slevel" top="Уровень бойца" placeholder="Выберите уровень" defaultValue="100"
					onChange={ function(){
						level = document.getElementById('slevel').value;

					}}>
					<option value="100">100</option>
					<option value="85">85</option>
					<option value="70">70</option>
					<option value="55">55</option>
					<option value="40">40</option>
				</Select>

				<Input id="phis_def" top="Физическая броня" placeholder="Введите показатель ф.брони" type="number"
					   onChange={ function(){
					   	phis_def = document.getElementById('phis_def').value;
					   	let currentValue = Number(phis_def) ;
					   	let heroInvisible ;

					   	if (level === "100") {
					   		heroInvisible = 30700;
						} else if (level === "85") {
					   		heroInvisible = 26370;
						} else if (level === "70") {
							heroInvisible = 22440;
						} else if (level === "55") {
							heroInvisible = 18310;
						} else if (level === "40") {
							heroInvisible = 14180;
						} else {
							heroInvisible = 1;
						}
					   	let result_phis_def = currentValue / (heroInvisible + currentValue) ;
					   	result_phis_def = result_phis_def * 100 ;
						document.getElementById("result_phis_def").innerHTML = result_phis_def.toFixed(2) + "%" ;
					   }}/>

				<Input id="mage_def" top="Магическая броня" placeholder="Введите показатель м.брони" type="number"
					   onChange={ function(){
					   mage_def = document.getElementById('mage_def').value;
					   let currentValue = Number(mage_def) ;
					   let heroInvisible ;
					   if (level === "100") {
						   heroInvisible = 30000;
					   } else if (level === "85") {
						   heroInvisible = 25964;
					   } else if (level === "70") {
						   heroInvisible = 21929;
					   } else if (level === "55") {
						   heroInvisible = 17892;
					   } else if (level === "40") {
						   heroInvisible = 13856;
					   } else {
						   heroInvisible = 1;
					   }

					   let result_mage_def = currentValue / (heroInvisible + currentValue) ;
					   result_mage_def = result_mage_def * 100 ;
						   document.getElementById("result_mage_def").innerHTML = result_mage_def.toFixed(2) + "%" ;

					   }}/>

				<Input id="critical" top="Крит" placeholder="Введите показатель крита" type="number"
					   onChange={ function(){
					   	critical = document.getElementById('critical').value;
					   	let currentValue = Number(critical) ;
					   	let heroInvisible ;
						   if (level === "100") {
							   heroInvisible = 30100;
						   } else if (level === "85") {
							   heroInvisible = 26051;
						   } else if (level === "70") {
							   heroInvisible = 22001;
						   } else if (level === "55") {
							   heroInvisible = 17952;
						   } else if (level === "40") {
							   heroInvisible = 13903;
						   } else {
							   heroInvisible = 1;
						   }

						   let result_critical = currentValue / (heroInvisible + currentValue) ;
						   result_critical = result_critical * 100 ;
						   document.getElementById("result_critical").innerHTML = result_critical.toFixed(2) + "%" ;

					   }}/>

				<Input id="dodge" top="Уворот" placeholder="Введите показатель уворота" type="number"
					   onChange={ function(){
					   	dodge = document.getElementById('dodge').value;
					   	let currentValue = Number(dodge) ;
					   	let heroInvisible ;
						   if (level === "100") {
							   heroInvisible = 30100;
						   } else if (level === "85") {
							   heroInvisible = 26051;
						   } else if (level === "70") {
							   heroInvisible = 22001;
						   } else if (level === "55") {
							   heroInvisible = 17952;
						   } else if (level === "40") {
							   heroInvisible = 13903;
						   } else {
							   heroInvisible = 1;
						   }

						   let result_dodge = currentValue / (heroInvisible + (2 * currentValue)) ;
						   result_dodge = result_dodge * 100 ;
						   document.getElementById("result_dodge").innerHTML = result_dodge.toFixed(2) + "%" ;


					   }}/>

			</FormLayout>

			<Group>
				<Header mode="secondary">Результат расчета</Header>
				<Cell multiline>
					<InfoRow  header="Поглощение физического урона">
						<Div id="result_phis_def">
							0%
						</Div>
					</InfoRow>
				</Cell>
				<Cell>
					<InfoRow  header="Поглощение магического урона">
						<Div id="result_mage_def">
							0%
						</Div>
					</InfoRow>
				</Cell>
				<Cell>
					<InfoRow  header="Шанс критического удара">
						<Div id="result_critical">
							0%
						</Div>
					</InfoRow>
				</Cell>
				<Cell>
					<InfoRow header="Шанс уворота от атаки">
						<Div id="result_dodge">
							0%
						</Div>
					</InfoRow>
				</Cell>
			</Group>
		</Panel>
		</Fragment>
	)
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
