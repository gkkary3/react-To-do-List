# Project Management Web Application

![Project Screenshot](./path-to-your-screenshot.png)

## 프로젝트 소개
이 프로젝트는 사용자가 여러 프로젝트를 생성하고 관리할 수 있는 웹 애플리케이션입니다. 프로젝트를 추가할 때 제목, 내용, 마감일을 설정할 수 있으며, 추가된 프로젝트들은 좌측 메뉴에 리스트로 나타납니다. 프로젝트 리스트 중 하나를 클릭하면 해당 프로젝트의 상세 화면으로 이동하며, 기본적으로 작성한 제목, 내용, 마감일이 표시됩니다.

상세 화면에서는 개별 Task를 추가 및 삭제할 수 있고, 프로젝트 자체도 삭제할 수 있는 기능이 구현되어 있습니다.

## 사용된 기술

- **React Hooks**: `useState`, `useRef`, `useContext`를 사용하여 상태 관리와 데이터 참조를 처리
- **Tailwind CSS**: UI 스타일링을 Tailwind CSS로 구현
- **LocalStorage**: 앞으로 구현할 기능에서 프로젝트 데이터와 사용자 이름을 LocalStorage에 저장할 예정

## 주요 기능

1. **프로젝트 추가**  
   - 제목, 내용, 마감일을 설정하여 프로젝트를 추가할 수 있습니다.
   - 추가된 프로젝트들은 좌측 메뉴에 리스트 형태로 표시됩니다.

2. **프로젝트 상세 화면**  
   - 리스트에서 프로젝트를 클릭하면 상세 화면으로 이동합니다.
   - 상세 화면에서 프로젝트에 Task를 추가하거나 삭제할 수 있습니다.
   - 프로젝트 자체를 삭제하는 기능도 제공됩니다.

3. **React Hooks**  
   - `useState`: 프로젝트와 Task 상태 관리
   - `useRef`: 폼 입력 처리
   - `useContext`: 데이터 공유 및 전역 상태 관리

4. **Tailwind CSS를 이용한 스타일링**  
   - 모든 컴포넌트의 UI는 Tailwind CSS로 구현하였습니다.

## 앞으로 구현할 기능

1. **사용자 이름 입력 화면**
   - 애플리케이션 로드 시, 사용자의 이름을 입력하는 화면이 나타나게 할 예정입니다.
   - 이름을 입력하고 나면 화면 우측 상단에 이름이 표시되고, 프로젝트를 추가하라는 메인 화면과 좌측 프로젝트 리스트 화면이 함께 보입니다.
   
2. **LocalStorage 활용**
   - 입력된 사용자 이름은 LocalStorage에 저장되어 브라우저를 재로드해도 이름이 유지되도록 할 계획입니다.
   - 추가한 프로젝트 데이터와 상세 페이지에서 관리되는 Task 데이터 또한 LocalStorage에 저장될 예정입니다.

## 프로젝트 이미지

![Project Screenshot](./path-to-your-screenshot.png)

## 프로젝트 링크
- [GitHub Repository](https://github.com/your-username/project-management-app)

## 설치 및 실행 방법

### 1. 프로젝트 클론
```bash
git clone https://github.com/your-username/project-management-app.git
