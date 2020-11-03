import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import { Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';




const Home = ({ id, go, fetchedUser }) => {

	let level = 100 ;
	let levelEnemy = 100 ;
	let phis_def = 0 ;
	let mage_def = 0 ;
	let critical = 0 ;
	let dodge = 0 ;

	let hiddenDodges = [4036, 4359, 4682, 5004, 5327, 5650, 5973, 6296, 6619, 6942, 7265, 7587, 7910, 8233, 8556, 8879,
		9202, 9525, 9848, 10170, 10493, 10816, 11139, 11462, 11785, 12108, 12430,  122753, 13076, 13399, 13722, 14045,
		14368, 14691, 15013, 15336, 15659, 15982, 16305, 16628, 16951, 17274, 17596, 17919, 18242, 18565, 18888, 19211,
		19534, 19857, 20179, 20502, 20825, 21148, 21471, 21794, 22117, 22439, 22762, 23085, 23408, 23731, 24054, 24377,
		24700, 25022, 25345, 25668, 25991, 26314, 26637, 26960, 27283, 27605, 27928, 28251, 28574, 28897, 29220, 29543,
		29865, 30188, 30511, 30834, 31157, 31480, 31803, 32126, 32448, 32771, 33094, 33417, 33740, 34063, 34386, 34709,
		35031, 35354, 35677, 36000];

	let hiddenCrits = [3374, 3644, 3914, 4184, 4454, 4724, 4994, 5264, 5534, 5804, 6074, 6344, 6614, 6884, 7154, 7424,
		7694, 7964, 8234, 8504, 8774, 9043, 9313, 9583, 9853, 10123, 10393, 10663, 10933, 11203, 11473, 11743, 12013,
		12283, 12553, 12823, 13093, 13363, 13633, 13903, 14173, 14443, 14713, 14983, 15252, 15522, 15792, 16062, 16332,
		16602, 16872, 17142, 17412, 17682, 17952, 18222, 18492, 18762, 19032, 19302, 19572, 19842, 20112, 20382, 20652,
		20922, 21191, 21461, 21731, 22001, 22271, 22541, 22811, 23081, 23351, 23621, 23891, 24161, 24431, 24701, 24971,
		25241, 25511, 25781, 26051, 26321, 26591, 26861, 27130, 27400, 27670, 27940, 28210, 28480, 28750, 29020, 29290,
		29560, 29830, 30100];

	let hiddenMagDef = [3364, 3632, 3901, 4170, 4440, 4709, 4978, 5246, 5515, 5785, 6054, 6323, 6592, 6860, 7130, 7399,
		7668, 7937, 8207, 8476, 8744, 9013, 9282, 9552, 9821, 10090, 10358, 10628, 10897, 11166, 11435, 11704, 11974,
		12242, 12511, 12780, 13049, 13319, 13588, 13856, 14125, 14395, 14664, 14933, 15202, 15470, 15740, 16009, 16278,
		16547, 16816, 17086, 17354, 17623, 17892, 18162, 18431, 18700, 18968, 19237, 19507, 19776, 20045, 20314, 20582,
		20852, 21121, 21390, 21659, 21929, 22198, 22466, 22735, 23004, 23274, 23543, 23812, 24080, 24349, 24619, 24888,
		25157, 25426, 25696, 25964, 26233, 26502, 26771, 27041, 27310, 27578, 27847, 28116, 28386, 28655, 28924, 29192,
		29462, 29731, 30000];

	let hiddenfizDef = [3442, 3717, 3992, 4268, 4543, 4818, 5094, 5369, 5644, 5920, 6195, 6470, 6746, 7021, 7296, 7572,
		7847, 8122, 8398, 8673, 8948, 9224, 9499, 9774, 10050, 10325, 10600, 10876, 11151, 11426, 11702, 11977, 12252,
		12528, 12803, 13078, 13354, 13629, 13904, 14180, 14455, 14730, 15006, 15281, 15557, 15832, 16107, 16383, 16658,
		16933, 17209, 17484, 17759, 18035, 18310, 18585, 18861, 19136, 19411, 19687, 19962, 20237, 20513, 20788, 21063,
		21339, 21614, 21889, 22165, 22440, 22715, 22991, 23266, 23541, 23817, 24092, 24367, 24643, 24918, 25193, 25469,
		25744, 26019, 26295, 26570, 26845, 27121, 27396, 27671, 27947, 28222, 28497, 28773, 29048, 29323, 29599, 29874,
		30149, 30425, 30700];

	function calculateResult() {
		let result_phis_def = (1 - hiddenfizDef[levelEnemy - 1] / (hiddenfizDef[level - 1] + phis_def)) * 100;
		let result_mage_def = (1 - hiddenMagDef[levelEnemy - 1] / (hiddenMagDef[level - 1] + mage_def)) * 100;
		let result_critical = (1 - hiddenCrits[levelEnemy - 1] / (hiddenCrits[level - 1] + critical)) * 100;
		let result_dodge = (1 - hiddenDodges[levelEnemy - 1] /
			(hiddenDodges[level - 1] + hiddenDodges[level - 1] *
				(1 - hiddenCrits[level - 1] / (hiddenCrits[level - 1] + dodge)))) * 100;

		return [result_phis_def, result_mage_def, result_critical, result_dodge] ;
	}

	return (
		<Fragment>


		<Panel id={id}>
			<PanelHeader>Калькулятор характеристик</PanelHeader>
			<FormLayout>
				<Select id="slevel" top="Уровень вашего бойца" placeholder="Выберите уровень" defaultValue="100"
					onChange={ function(){
						level = Number(document.getElementById('slevel').value);
						let resultArr = calculateResult() ;
						document.getElementById("result_phis_def").innerHTML = resultArr[0].toFixed(2) + "%" ;
						document.getElementById("result_mage_def").innerHTML = resultArr[1].toFixed(2) + "%" ;
						document.getElementById("result_critical").innerHTML = resultArr[2].toFixed(2) + "%" ;
						document.getElementById("result_dodge").innerHTML = resultArr[3].toFixed(2) + "%" ;

					}}>
					<option value="100">100</option>
					<option value="99">99</option>
					<option value="98">98</option>
					<option value="97">97</option>
					<option value="96">96</option>
					<option value="95">95</option>
					<option value="94">94</option>
					<option value="93">93</option>
					<option value="92">92</option>
					<option value="91">91</option>
					<option value="90">90</option>
					<option value="89">89</option>
					<option value="88">88</option>
					<option value="87">87</option>
					<option value="86">86</option>
					<option value="85">85</option>
					<option value="84">84</option>
					<option value="83">83</option>
					<option value="82">82</option>
					<option value="81">81</option>
					<option value="80">80</option>
					<option value="79">79</option>
					<option value="78">78</option>
					<option value="77">77</option>
					<option value="76">76</option>
					<option value="75">75</option>
					<option value="74">74</option>
					<option value="73">73</option>
					<option value="72">72</option>
					<option value="71">71</option>
					<option value="70">70</option>
					<option value="69">69</option>
					<option value="68">68</option>
					<option value="67">67</option>
					<option value="66">66</option>
					<option value="65">65</option>
					<option value="64">64</option>
					<option value="63">63</option>
					<option value="62">62</option>
					<option value="61">61</option>
					<option value="60">60</option>
					<option value="59">59</option>
					<option value="58">58</option>
					<option value="57">57</option>
					<option value="56">56</option>
					<option value="55">55</option>
					<option value="54">54</option>
					<option value="53">53</option>
					<option value="52">52</option>
					<option value="51">51</option>
					<option value="50">50</option>
					<option value="49">49</option>
					<option value="48">48</option>
					<option value="47">47</option>
					<option value="46">46</option>
					<option value="45">45</option>
					<option value="44">44</option>
					<option value="43">43</option>
					<option value="42">42</option>
					<option value="41">41</option>
					<option value="40">40</option>
					<option value="39">39</option>
					<option value="38">38</option>
					<option value="37">37</option>
					<option value="36">36</option>
					<option value="35">35</option>
					<option value="34">34</option>
					<option value="33">33</option>
					<option value="32">32</option>
					<option value="31">31</option>
					<option value="30">30</option>
					<option value="29">29</option>
					<option value="28">28</option>
					<option value="27">27</option>
					<option value="26">26</option>
					<option value="25">25</option>
					<option value="24">24</option>
					<option value="23">23</option>
					<option value="22">22</option>
					<option value="21">21</option>
					<option value="20">20</option>
					<option value="19">19</option>
					<option value="18">18</option>
					<option value="17">17</option>
					<option value="16">16</option>
					<option value="15">15</option>
					<option value="14">14</option>
					<option value="13">13</option>
					<option value="12">12</option>
					<option value="11">11</option>
					<option value="10">10</option>
					<option value="9">9</option>
					<option value="8">8</option>
					<option value="7">7</option>
					<option value="6">6</option>
					<option value="5">5</option>
					<option value="4">4</option>
					<option value="3">3</option>
					<option value="2">2</option>
					<option value="1">1</option>
				</Select>

				<Select id="slevelEnemy" top="Уровень бойца противника" placeholder="Выберите уровень" defaultValue="100"
						onChange={ function(){
							levelEnemy = Number(document.getElementById('slevelEnemy').value);
							let resultArr = calculateResult() ;
							document.getElementById("result_phis_def").innerHTML = resultArr[0].toFixed(2) + "%" ;
							document.getElementById("result_mage_def").innerHTML = resultArr[1].toFixed(2) + "%" ;
							document.getElementById("result_critical").innerHTML = resultArr[2].toFixed(2) + "%" ;
							document.getElementById("result_dodge").innerHTML = resultArr[3].toFixed(2) + "%" ;
						}}>
					<option value="100">100</option>
					<option value="99">99</option>
					<option value="98">98</option>
					<option value="97">97</option>
					<option value="96">96</option>
					<option value="95">95</option>
					<option value="94">94</option>
					<option value="93">93</option>
					<option value="92">92</option>
					<option value="91">91</option>
					<option value="90">90</option>
					<option value="89">89</option>
					<option value="88">88</option>
					<option value="87">87</option>
					<option value="86">86</option>
					<option value="85">85</option>
					<option value="84">84</option>
					<option value="83">83</option>
					<option value="82">82</option>
					<option value="81">81</option>
					<option value="80">80</option>
					<option value="79">79</option>
					<option value="78">78</option>
					<option value="77">77</option>
					<option value="76">76</option>
					<option value="75">75</option>
					<option value="74">74</option>
					<option value="73">73</option>
					<option value="72">72</option>
					<option value="71">71</option>
					<option value="70">70</option>
					<option value="69">69</option>
					<option value="68">68</option>
					<option value="67">67</option>
					<option value="66">66</option>
					<option value="65">65</option>
					<option value="64">64</option>
					<option value="63">63</option>
					<option value="62">62</option>
					<option value="61">61</option>
					<option value="60">60</option>
					<option value="59">59</option>
					<option value="58">58</option>
					<option value="57">57</option>
					<option value="56">56</option>
					<option value="55">55</option>
					<option value="54">54</option>
					<option value="53">53</option>
					<option value="52">52</option>
					<option value="51">51</option>
					<option value="50">50</option>
					<option value="49">49</option>
					<option value="48">48</option>
					<option value="47">47</option>
					<option value="46">46</option>
					<option value="45">45</option>
					<option value="44">44</option>
					<option value="43">43</option>
					<option value="42">42</option>
					<option value="41">41</option>
					<option value="40">40</option>
					<option value="39">39</option>
					<option value="38">38</option>
					<option value="37">37</option>
					<option value="36">36</option>
					<option value="35">35</option>
					<option value="34">34</option>
					<option value="33">33</option>
					<option value="32">32</option>
					<option value="31">31</option>
					<option value="30">30</option>
					<option value="29">29</option>
					<option value="28">28</option>
					<option value="27">27</option>
					<option value="26">26</option>
					<option value="25">25</option>
					<option value="24">24</option>
					<option value="23">23</option>
					<option value="22">22</option>
					<option value="21">21</option>
					<option value="20">20</option>
					<option value="19">19</option>
					<option value="18">18</option>
					<option value="17">17</option>
					<option value="16">16</option>
					<option value="15">15</option>
					<option value="14">14</option>
					<option value="13">13</option>
					<option value="12">12</option>
					<option value="11">11</option>
					<option value="10">10</option>
					<option value="9">9</option>
					<option value="8">8</option>
					<option value="7">7</option>
					<option value="6">6</option>
					<option value="5">5</option>
					<option value="4">4</option>
					<option value="3">3</option>
					<option value="2">2</option>
					<option value="1">1</option>
				</Select>

				<Input id="phis_def" top="Физическая броня" placeholder="Введите показатель ф.брони" type="number"
					   onChange={ function(){
					   		phis_def = Number(document.getElementById('phis_def').value);
						   	let resultArr = calculateResult() ;
						   	document.getElementById("result_phis_def").innerHTML = resultArr[0].toFixed(2) + "%" ;
						   	document.getElementById("result_mage_def").innerHTML = resultArr[1].toFixed(2) + "%" ;
						   	document.getElementById("result_critical").innerHTML = resultArr[2].toFixed(2) + "%" ;
						   	document.getElementById("result_dodge").innerHTML = resultArr[3].toFixed(2) + "%" ;
					   }}/>

				<Input id="mage_def" top="Магическая броня" placeholder="Введите показатель м.брони" type="number"
					   onChange={ function(){
					   mage_def = Number(document.getElementById('mage_def').value);
					   let resultArr = calculateResult() ;
					   document.getElementById("result_phis_def").innerHTML = resultArr[0].toFixed(2) + "%" ;
					   document.getElementById("result_mage_def").innerHTML = resultArr[1].toFixed(2) + "%" ;
					   document.getElementById("result_critical").innerHTML = resultArr[2].toFixed(2) + "%" ;
					   document.getElementById("result_dodge").innerHTML = resultArr[3].toFixed(2) + "%" ;
					   }}/>

				<Input id="critical" top="Крит" placeholder="Введите показатель крита" type="number"
					   onChange={ function(){
					   	critical = Number(document.getElementById('critical').value);
					   	let resultArr = calculateResult() ;
					   	document.getElementById("result_phis_def").innerHTML = resultArr[0].toFixed(2) + "%" ;
					   	document.getElementById("result_mage_def").innerHTML = resultArr[1].toFixed(2) + "%" ;
					   	document.getElementById("result_critical").innerHTML = resultArr[2].toFixed(2) + "%" ;
					   	document.getElementById("result_dodge").innerHTML = resultArr[3].toFixed(2) + "%" ;
					   }}/>

				<Input id="dodge" top="Уворот" placeholder="Введите показатель уворота" type="number"
					   onChange={ function(){
					   	dodge = Number(document.getElementById('dodge').value);
					   	let resultArr = calculateResult() ;
					   	document.getElementById("result_phis_def").innerHTML = resultArr[0].toFixed(2) + "%" ;
					   	document.getElementById("result_mage_def").innerHTML = resultArr[1].toFixed(2) + "%" ;
					   	document.getElementById("result_critical").innerHTML = resultArr[2].toFixed(2) + "%" ;
					   	document.getElementById("result_dodge").innerHTML = resultArr[3].toFixed(2) + "%" ;
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
