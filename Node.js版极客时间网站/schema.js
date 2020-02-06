const {graphql, buildSchema} = require('graphql')

const mockDatabase = {
	1: {
		id: 1, 
		avatar: 'https://xxx',
		isTop: true,
		content: 'xxx',
		publishDate: '12',
		commentNum: 10,
		praiseNum: 5
	}
}

const schema = buildSchema(`
	type Comment {
		id: Int
		avatar: String
		name: String
		isTop: Boolean
		content: String
		publishDate: String
		commentNum: Int
		praiseNum: Int
	}
	type Query {
		comment: [Comment]
	}

	type Mutation {
		praise(id: Int): Int
	}
`)

schema.getQueryType().getFields().comment.resolve = () => {
	// return [{
	// 	id: 1, 
	// 	avatar: 'https://xxx',
	// 	isTop: true,
	// 	content: 'xxx',
	// 	publishDate: '12',
	// 	commentNum: 10,
	// 	praiseNum: 5
	// }]
	return Object.keys(mockDatabase).map((key) => {
		return mockDatabase[key]
	})
}

schema.getMutationType().getFields().praise.resolve = (arg0, {id}) => {
	mockDatabase[id].praiseNum++;

	return mockDatabase[id].praiseNum
}

module.exports = schema