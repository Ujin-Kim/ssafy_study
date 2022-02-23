//우아한 3번 문제
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int res[100001];
string reqs[4] = {"DEPOSIT 3a 10000", "CREATE 3a 300000", "WITHDRAW 3a 150000",  "WITHDRAW 3a 150001"};
string reqs2[3] = { "CREATE 3a 10000", "CREATE 3a 20000", "CREATE 2bw 30000"};

struct cust {
	string id;
	int maxi;
	int balance;
};

vector<cust> history;

int Create(string inst) {
	int idx = inst.find(" ");
	int idx2 = inst.find(" ", idx + 1);
	string name = inst.substr(idx + 1, idx2 - idx - 1);
	int mx = stoi(inst.substr(idx2 + 1));

	//사용자 찾기
	for (int i = 0; i < history.size(); i++) {
		if (history[i].id == name) return 403;
	}
	history.push_back({ name, -mx, 0 });
	return 200;
}

int Deposit(string inst) {
	int idx = inst.find(" ");
	int idx2 = inst.find(" ", idx + 1);
	string name = inst.substr(idx + 1, idx2 - idx - 1);
	int cost = stoi(inst.substr(idx2 + 1));

	//사용자 찾기
	for (int i = 0; i < history.size(); i++) {
		if (history[i].id == name) {
			history[i].balance = cost;
			return 200;
		}
	}
	return 404;
}

int Withdraw(string inst) {
	int idx = inst.find(" ");
	int idx2 = inst.find(" ", idx + 1);
	string name = inst.substr(idx + 1, idx2 - idx - 1);
	int cost = stoi(inst.substr(idx2 + 1));

	//사용자 찾기
	for (int i = 0; i < history.size(); i++) {
		if (history[i].id == name) {
			if (history[i].balance - cost < history[i].maxi) return 403;
			else {
				history[i].balance -= cost;
				return 200;
			}
		}
	}
	return 404;
}

int main() {
	//입력 배열 크기만큼
	for (int i = 0; i < 4; i++) {
		string inst = reqs[i];
		if (inst[0] == 'D') res[i] = Deposit(inst);
		else if (inst[0] == 'C') res[i] = Create(inst);
		else if (inst[0] == 'W') res[i] = Withdraw(inst);
	}

	//입력배열크기만큼 출력
	for (int i = 0; i < 4; i++) {
		cout << res[i] << " ";
	}
	return 0;
}
