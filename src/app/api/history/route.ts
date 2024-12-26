import { NextResponse } from 'next/server';

// 입력값과 변환된 결과를 저장하는 메모리 내 저장소
const history: { input: string; output: string; likes: number }[] = [];

// GET: 저장된 입력값과 결과값의 히스토리를 반환
export async function GET() {
    return NextResponse.json(history);
}

// POST: 새로운 입력값과 결과값을 저장
export async function POST(req: Request) {
    const { input, output } = await req.json();
    const existing = history.find((item) => item.input === input);
    if (!existing) {
        history.push({ input, output, likes: 0 });
    }
    return NextResponse.json({ success: true });
}

// DELETE: 특정 입력값을 히스토리에서 제거
export async function DELETE(req: Request) {
    const { input } = await req.json();
    const index = history.findIndex((item) => item.input === input);
    if (index !== -1) {
        history.splice(index, 1);
        return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 });
}

// TODO PUT: 특정 입력값의 좋아요(likes) 수를 증가
export async function PUT(req: Request) {

}
