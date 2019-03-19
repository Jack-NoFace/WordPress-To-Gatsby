import React, { Component } from "react";
import styled from "styled-components";

const StatusElement = styled.header`
	left: 0;
	padding: 8px;
	top: 0;

	span {
		opacity: 0.2;
	}

	.status__complete {
		opacity: 1;
	}
`;

const stages = [
	{
		icon: "👋",
		stageCount: 0
	},
	{
		icon: "🖨",
		stageCount: 3
	},
	{
		icon: "👋",
		stageCount: 2
	},
	{
		icon: "👋",
		stageCount: 2
	},
	{
		icon: "👋",
		stageCount: 2
	},
	{
		icon: "👋",
		stageCount: 2
	},
	{
		icon: "👋",
		stageCount: 2
	}
];

export default class Status extends Component {
	render() {
		const slideCount = this.props.slideCount ? this.props.slideCount : 0;

		return (
			<StatusElement>
				{stages.map(stage => {
					if (slideCount >= stage.stageCount) {
						return (
							<span className="status__stage status__complete">
								{stage.icon}
							</span>
						);
					}
					return <span className="status__stage">{stage.icon}</span>;
				})}
			</StatusElement>
		);
	}
}
