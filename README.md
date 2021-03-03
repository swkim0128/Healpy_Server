# Healpy_Server

프로젝트 Healpy <br>
운동 자세 분석 서버 모듈


## 개요

    - 학교 창의 융합 설계 과제.
    - 맡은 포지션 : 팀장
    - 서버 : nodejs, 데이터 베이스 : firebase, 분석 도구 : openpose, 클라이언트 : 안드로이드 앱
    - 안드로이드 어플리케이션으로 측정한 운동 사진을 서버인 nodejs로 보내어 임시 저장한뒤 분석 도구인 openpose를 이용하여 사진의 운동 자세를 분석.
    - 분석된 데이터를 데이터 베이스인 firebase로 보내어 데이터를 저장. 저장된 데이터는 어플리케이션으로 받아 사용자에게 분석된 데이터를 보여줌.
    
* 개발 기간

    2018.09 ~ 2018.12
    
* 사용 기술 / 언어

    node js, firebase, openpose
    
* 개발 담당 분야
    
    백엔드


## 결론

    결론적으로 실패한 프로젝트.
    그때 당시 서버와 클라이언트를 제대로 이해하지 못한 상태에서 데이터 베이스를 firebase를 사용해보겠다며, 시스템 구성을 이상하게 짜는 현상을 만들어냄.
    결과적으로 서비스를 이용하는데는 큰 문제는 없었으나, 장기적으로는 제대로 된 프로젝트가 아니라고 개인적으로 판단이 됨.
    안드로이드와 서버에 대해 정확한 조사가 부족했었다고 판단.
