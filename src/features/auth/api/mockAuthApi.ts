import jwt from "jsonwebtoken"

// Mock User 데이터 (MongoDB 없이 사용)
const mockUsers = [
	{ email: "test1@test1.com", password: "test1test1" },
	{ email: "test@test.com", password: "testtest" },
]

// JWT Secret Key (서버 배포 시에는 환경변수로 관리)
const SECRET_KEY = "mock_secret_key"

// 로그인 요청 처리 (MongoDB 없이 가능)
export const MockPostLogin = async ({
	email,
	password,
}: {
	email: string
	password: string
}) => {
	// Mock User 데이터에서 이메일 찾기
	const user = mockUsers.find(
		(e) => e.email === email && e.password === password,
	)

	if (!user) {
		throw new Error("이메일 또는 비밀번호가 잘못되었습니다.")
	}

	// JWT 발급 (임시)
	const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "1h" })

	// 브라우저에 JWT 저장
	localStorage.setItem("token", token)

	return { message: "로그인 성공", token }
}
