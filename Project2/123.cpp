//우아한 1번문제
/*
#include <iostream>
#include <vector>
using namespace std;

vector<int> v;

int res;

int main() {
	//입력
	int arr[14] = { 1,1,3,3,2,2,4,5,1,1,1,3,3,3 };
	int arr2[3] = { 1,2,3 };
	int arr3[13] = { 2,2,1,1,2,2,1,1,2,2,2,1,2 };
	int arr4[1] = { 2 };


	//start
	for (int i = 0; i < 1; i++) { //입력문자열 크기만큼 
		v.push_back(arr4[i]);
	}
	
	while (1) {

		vector<int> tmp;

		if (v.size() == 1) break;

		int prev = v[0];
		int cnt = 1;
		for (int i = 1; i < v.size(); i++) {
			if (prev == v[i]) {
				cnt++;
			}
			else {
				tmp.push_back(cnt);
				prev = v[i];
				cnt = 1;
			}
			if (i == v.size() - 1 && prev == v[i]) {
				tmp.push_back(cnt);
			}
		}

		//tmp -> v로 옮기기
		v.clear();
		for (int i = 0; i < tmp.size(); i++) {
			v.push_back(tmp[i]);
		}
		res++;
	}

	cout << res + 1;
	return 0;
}
*/