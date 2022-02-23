/*

//우아한 2번문제
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int arr[5] = {112,1814,121,1481,1184};
int arr2[6] = {123,456,789,321,654,987};
int arr3[7] = {1,2,3,1,2,3,4};
int arr4[9] = {123,234,213,432,234,1234,2341,12345,324};

int cnt[10];
vector<int> res;
int answer;

int main() {
	
	for (int i = 0; i < 5; i++) {//입력 배열 크기만큼

		//cnt초기화
		for (int i = 0; i < 10; i++) {
			cnt[i] = 0;
		}

		//숫자 -> string : cnt세기
		string str = to_string(arr[i]);
		for (int i = 0; i < str.size(); i++) {
			int idx = str[i] - '0';
			cnt[idx]++;
		}

		//sorting해서 다시 저장
		int tmp = 0;
		for (int i = 0; i < 10; i++) {
			for (int j = 0; j < cnt[i]; j++) {
				tmp = tmp * 10 + i;
			}
		}
		res.push_back(tmp);
	}

	//res sorting
	sort(res.begin(), res.end());

	//group counting
	int prev = res[0];
	int answer = 1;
	for (int i = 1; i < res.size(); i++) {
		if(prev != res[i]){
			prev = res[i];
			answer++;
		}
	}

	cout << answer;
	return 0;
}

*/