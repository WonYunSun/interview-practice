import { NextResponse } from 'next/server';

// 입력값과 변환된 결과의 히스토리를 저장하는 메모리 내 저장소
const history: { input: string; output: string }[] = [];

// GET: 입력값과 변환된 결과의 히스토리를 반환
export async function GET() {
    return NextResponse.json(history);
}

// POST: 새로운 항목(입력값과 변환 결과)을 히스토리에 추가
export async function POST(req: Request) {
    const { input, output } = await req.json();
    history.push({ input, output });
    return NextResponse.json({ success: true });
}
