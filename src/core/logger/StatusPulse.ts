export class FirestoreLogger {
  record(data: Record<string, any>) {
    console.log('StatusPulse:', data);
  }
}
