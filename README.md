# Reverse Text Application

## 프로젝트 설명
이 프로젝트는 Next.js를 활용하여 텍스트 입력 및 변환, 서버와의 통신, 데이터를 저장 및 관리하는 기능을 학습하기 위한 과제입니다. 제공된 기본 코드를 바탕으로 요구사항을 구현하세요.

---

## 기본 요구사항

1. **텍스트 입력 및 변환**
   - 위쪽 `textarea`에서 사용자의 입력을 받습니다.
   - 버튼 클릭 시 텍스트를 **뒤집어** 아래쪽 `textarea`에 출력합니다.
     - 예: `cat` → `tac`
   - **Route Handler 사용**: 입력값을 서버에 전달하고, 변환된 값을 서버에서 받아오세요.

2. **입력 검증**
   - 입력값이 **공백**(`""`, `"   "`)이거나 **3글자 미만**일 경우:
     - 에러 메시지를 빨간색으로 표시합니다.
     - 변환 로직은 실행되지 않습니다.
   - 입력값이 유효할 경우 에러 메시지는 사라져야 합니다.

3. **입력 이력 관리**
   - **Route Handler 사용**: 사용자가 입력한 텍스트와 변환된 텍스트를 서버에 저장하세요.
   - 저장된 입력 이력을 화면에 목록으로 표시합니다.
   - **Load History 버튼**을 클릭하면, 서버에서 입력 이력을 불러와 UI에 표시하세요.

4. **Word Count 표시**
   - 위쪽 `textarea` 아래에 입력된 **단어 수**를 표시하세요.

---

## [Advanced] 추가 요구사항

1. **좋아요 기능**
   - 입력 이력에서 각 텍스트에 **좋아요 버튼**을 추가하세요.
   - 사용자는 각 텍스트에 대해 한 번만 좋아요를 누를 수 있습니다.
   - **Route Handler 사용**: 좋아요 수를 서버에서 관리하세요.

2. **삭제 및 복구 기능**
   - 입력 이력을 삭제할 수 있는 버튼을 추가하세요.
   - 삭제한 내용을 복구할 수 있는 **Undo 기능**을 구현하세요.
     - **[Advanced]** Undo 이후 다시 삭제할 수 있는 **Redo 기능**을 구현하세요.

3. **단축키 추가**
   - `Ctrl + Z` 또는 `Cmd + Z` 단축키로 Undo 동작을 실행하세요.

---

## Before
<img width="739" alt="Screenshot 2024-12-26 at 12 25 34 PM" src="https://github.com/user-attachments/assets/8963c9d9-e51a-49a5-b276-a30ee43e1b44" />

## After
<img width="732" alt="Screenshot 2024-12-26 at 12 25 13 PM" src="https://github.com/user-attachments/assets/a2eabee8-bb6c-47f1-9c8e-5133697a4188" />


---

## 제공된 파일

1. **`app/page.tsx`**:
   - 기본 UI 및 상태 관리 코드를 포함합니다.
   - `TODO` 주석을 따라 클라이언트 로직을 완성하세요.

2. **`app/api/history/route.ts`**:
   - Route Handler 코드가 구현되어 있습니다.
   - 클라이언트에서 데이터를 서버에 저장하거나 불러오고 삭제하는 기능을 지원합니다.

